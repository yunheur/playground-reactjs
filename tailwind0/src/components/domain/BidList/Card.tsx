import * as React from "react";
import { Product } from "../../../apis/bid";
import { Box, Flex, Text, Image } from "../../core";
import Tag from "./Tag";

interface Props {
  data: Product;
}

export default function Card({ data }: Props) {
  return (
    <Box className="bg-[#F5F5F5] p-[14px] pt-[32px] rounded-[10px]">
      <Image
        className="w-full h-[122px]"
        src={`https://image.collexx.io/${data.imageName}`}
        objectFit="cover"
      />
      <Text className="pt-[27px] text-[16px] font-bold" numberOfLines={1}>
        {data.name}
      </Text>
      <Text
        className="pt-[8px] text-[12px] text-[#555555] font-normal"
        numberOfLines={2}
      >
        {data.detailName}
      </Text>
      <Text
        className="pt-[11px] text-[12px] line-through font-medium text-[#999999]"
        numberOfLines={2}
      >
        {`₩ ${data.originPrice}`}
      </Text>
      <Flex className="pt-[4px] justify-between">
        <Text className="text-[16px] font-extrabold">{`₩ ${data.price}`}</Text>
        <Text className="text-[16px] font-bold text-red-500">{"30%"}</Text>
      </Flex>
      <Flex className="pt-[10px]" gapX={8}>
        <Tag>실착</Tag>
        <Tag>MATCH WORN</Tag>
      </Flex>
    </Box>
  );
}
