import * as React from 'react';
import {Center, Text} from '../../core';

export default function Tag({children}: React.PropsWithChildren<{}>) {
  return (
    <Center className="px-[9px] py-[4px] rounded-[30px] bg-black">
      <Text className="text-white text-[10px] font-normal">{children}</Text>
    </Center>
  );
}
