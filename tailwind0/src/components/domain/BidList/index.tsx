import { Product } from "../../../apis/bid";
import Card from "./Card";
import { Grid } from "../../core";

export interface BidListProps {
  data: Product[];
}

export default function BidList({ data }: BidListProps) {
  return (
    <Grid columns={2} gapX={10} gapY={16}>
      {data.map((item, itemIdx) => (
        <Card key={itemIdx} data={item} />
      ))}
    </Grid>
  );
}
