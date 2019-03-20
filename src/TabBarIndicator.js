/* @flow */

import * as React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import type { Route, SceneRendererProps, NavigationState } from './types';

export type Props<T> = {|
  ...SceneRendererProps,
  width: number,
  style?: ViewStyleProp,
|};

export default function TabBarIndicator<T: Route>(props: Props<T>) {
  const { width, style, translateX } = props;
  return (
    <Animated.View
      style={[
        styles.indicator,
        { width },
        { transform: [{ translateX }] },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#ffeb3b',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 2,
  },
});
