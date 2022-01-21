import { defaultVirtualBoundary } from '../table/constants';

/**
 *
 * create by ligx
 *
 * @flow
 */
export function cacheOnlyFirstCall(targetFunc: Function) {
  let containerPos;

  return {
    func(...args: any) {
      if (containerPos) {
        return containerPos;
      }

      return (containerPos = targetFunc(...args));
    },
    clearCache() {
      containerPos = undefined;
    },
  };
}

export function splitStr(str: string, sepator: string = ','): Array<string> {
  if (!str || str.trim().length === 0) {
    return [];
  }
  return str.split(sepator);
}

export function getElementPosition(e: Object) {
  let x = 0,
    y = 0;
  while (e) {
    x += e.offsetLeft;
    y += e.offsetTop;
    e = e.offsetParent;
  }
  return { x, y };
}

export function deleteValue(target: Array<any>, value: any): void {
  if (!target || target.length === 0) {
    return;
  }
  const index = target.indexOf(value);
  if (index === -1) {
    return;
  }

  target.splice(index, 1);
}

export function adjustValue(value: any, per: any) {
  value = value - 0;
  per = per - 0;
  const ys = value % per;
  if (ys !== 0) {
    return value - ys + per;
  }
  return value;
}

export function fixControlledValue(value: any) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

export function createExistMap(items: ?(string[])): { [key: string]: boolean } {
  if (!items || !items.length) {
    return {};
  }
  return items.reduce((exist: Object, key: string) => {
    exist[key] = true;
    return exist;
  }, {});
}

export function judgeStarts(value: string) {
  if (!value || typeof value !== 'string') {
    return false;
  }
  return value.startsWith('$lugia-dict.@lugia/lugia-web.');
}

export const getThemeDefaultConfigFromSource = sourceThemeConfig => (
  sizeType: 'small' | 'default' | 'large',
  themeName
) => {
  return sourceThemeConfig[sizeType]
    ? sourceThemeConfig[sizeType][themeName] || {}
    : sourceThemeConfig.default[themeName] || {};
};

export const handleDuration = (duration?: number | null, defaultTime: number = 2) => {
  if (typeof duration !== 'undefined') {
    if (duration === 0 || duration === null) {
      return 'no';
    }
    return duration;
  }
  return defaultTime;
};

export function disconnectResizeObserver(resizeObserver) {
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
}

export function existResizeObserverTarget(entries) {
  if (!entries) {
    return false;
  }
  const entry = entries[0];

  return !!entry;
}

export function getStickyStyle(config) {
  const { stickPosition, imgWidth, leftPositionFix = 0 } = config;

  return `
    width: ${imgWidth}px;
    position: sticky;
    left: ${stickPosition - leftPositionFix}px;
    right: ${stickPosition}px;
  `;
}

export function isBeyondBoundary(data = [], bigDataBoundary) {
  const chosenBoundary =
    typeof bigDataBoundary !== 'number'
      ? defaultVirtualBoundary
      : bigDataBoundary > defaultVirtualBoundary
      ? bigDataBoundary
      : defaultVirtualBoundary;

  return data.length > chosenBoundary;
}
