import Link from "next/link";
import React from "react";
import { Grid, Image } from "semantic-ui-react";

function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list &&
            list.map((item) => (
              <Grid.Column key={item.id}>
                <Link href={`view/${item.id}`}>
                    <Image src={item.thumbnailUrl} alt={item.title} />
                    {item.title}
                </Link>
              </Grid.Column>
            ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ItemList;
