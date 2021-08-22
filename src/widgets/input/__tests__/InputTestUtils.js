/**
 @flow
 */
import type { ReactWrapper } from 'enzyme';
import Enzyme, { mount } from 'enzyme';
import type { VerifyOrder } from '@lugia/jverify';
import * as React from 'react';
import Input from '../';
import 'jest-styled-components';
import chai from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const {
  mockFunction,
  VerifyOrder: VerifyOrderFactory,
  VerifyOrderConfig,
} = require('@lugia/jverify');

const { expect: exp } = chai;

export function testPropsValue(value: string, expect: string) {
  const component = mount(<Input value={value} />);
  assertInputValue(component, expect);
}

export function assertInputValue(component: ReactWrapper, expect: string) {
  const inputDOM = getInputDOM(component);
  if (inputDOM) {
    exp(inputDOM.value).to.be.equal(expect);
    return;
  }
  throw new Error('input创建失败');
}

function getInputDOM(component, text): HTMLInputElement | null {
  const result = component.find('input').getDOMNode();
  if (result instanceof HTMLInputElement) {
    return result;
  }
  return null;
}

type KeyEventType = 'onKeyUp' | 'onKeyPress' | 'onKeyDown' | 'onFocus' | 'onBlur';

export function testKeyBoardEvent(
  order: VerifyOrder,
  keyEvent: KeyEventType,
  opt: { keyCode: any, Target: React.ComponentType<any> }
) {
  const mockFunc = mockFunction.create(VerifyOrderConfig.create(keyEvent, order));
  const { keyCode = 49, Target } = opt;
  const event = { keyCode };
  mockFunc.mock(({ keyCode }) => {
    exp(keyCode).to.be.equal(keyCode);
  });
  const props = {
    [keyEvent]: mockFunc.getFunction(),
  };

  const component = mount(<Target {...props} />);
  component.find('input').simulate(keyEvent.substr(2).toLowerCase(), event);
  order.verify(arg => {
    arg[keyEvent](VerifyOrderFactory.Object);
  });
}

/*
 *   键盘事件为空的情况
 */
export function testFireNullKeyBoardEvent(
  keyEvent: KeyEventType,
  opt: { keyCode: any, Target: React.ComponentType<any> }
) {
  const { keyCode = 49, Target } = opt;
  const component = mount(<Target />);
  const event = { keyCode };

  component.find('input').simulate(keyEvent.substr(2).toLowerCase(), event);
}
