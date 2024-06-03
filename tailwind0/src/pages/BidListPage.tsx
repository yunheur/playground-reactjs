import React from "react";
import { Product } from "../apis/bid";
import * as bid from "../apis/bid";
import BidList from "../components/domain/BidList";
import { Box, Image, TextInput } from "../components/core";

export default function BidListPage() {
  const [data, setData] = React.useState<Product[]>([]);
  React.useEffect(() => {
    (async () => {
      const fetched = await bid.list();
      setData(fetched);
    })();
  }, []);

  const [text, setText] = React.useState("");

  return (
    <>
      <TextInput
        value={text}
        placeholder="텍스트를 입력하세요."
        className="h-[56px] text-[16px] rounded-[8px] border-solid border-gray-300 border-[1px] px-[16px]"
        onChangeText={(text) => {
          setText(text);
          console.log("text", text);
        }}
        style={{}}
      />
      <Image
        className="w-full h-[122px]"
        src={`https://image.collexx.io/b44d0e87-532a-4425-8e82-da5934c70db2.png`}
        objectFit="cover"
        onClick={() => {
          console.log("hello");
        }}
      />
      <input type="" />
      <Box className="p-[10px]">
        <BidList data={data} />
      </Box>
    </>
  );
}
