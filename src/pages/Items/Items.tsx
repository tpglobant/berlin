import {
  SimpleGrid,
  LoadingOverlay,
  Title,
  Container,
  Paper,
  Select,
  Group,
  Grid,
  Pagination,
} from "@mantine/core";
import { useState } from "react";

import { ItemCard } from "./ItemCard/ItemCard";
import SelectInput from "../../components/SelectInput";
import type { Item } from "./ItemCard/ItemCard";

import styles from "./Items.module.scss";

const DEFAULT_ITEMS_PER_PAGE = 9;

export const Items = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    DEFAULT_ITEMS_PER_PAGE
  );
  const [activePage, setActivePage] = useState<number | null>(1);

  const total = 11;
  const items = [{id:1, title:'title', description:"description"},
  {id:2, title:'title 2', description:"description"},
  {id:3, title:'title 3', description:"description"},
  {id:4, title:'title 4', description:"description"},
  {id:5, title:'title 5', description:"description"},
  {id:6, title:'title 6', description:"description"},
  {id:7, title:'title 7', description:"description"},
  {id:8, title:'title 8', description:"description"},
  {id:9, title:'title 9', description:"description"},
];

  const isLoading =false;
  const isFetching = false;

  const loading = isLoading || isFetching;
  const pages = Math.ceil(total / itemsPerPage);

  return (
      <Container className={styles.itemsPageContainer}>
        <Grid grow className={styles.searchAndSortContainer}>
          <Grid.Col span={3} offset={1}>
            <SelectInput
              onSortChange={()=>{}}
              data={[
                { value: "asc", label: "Oldest First" },
                { value: "desc", label: "Newest First" },
              ]}
            />
          </Grid.Col>
        </Grid>

        {items.length === 0 && !loading && (
          <Title size="h1" align="center">
            No results
          </Title>
        )}

        {loading ? (
          <Container className={styles.loadingContainer}>
            <LoadingOverlay visible />
          </Container>
        ) : (
          <SimpleGrid cols={3} spacing="lg">
            {items.map((item: Item) => (
              <ItemCard
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </SimpleGrid>
        )}
        {items.length > 0 && (
          <Paper shadow="md" p="md" className={styles.paginationContainer}>
            <Group align="center" position="right">
              <Select
                className={styles.pagesSelect}
                label={"Items per page"}
                value={`${itemsPerPage}`}
                placeholder={`${DEFAULT_ITEMS_PER_PAGE}`}
                data={[`${DEFAULT_ITEMS_PER_PAGE}`, "18", "36", "72"]}
              />

              <Pagination
                aria-label="pagination component"
                page={activePage}
                total={pages}
                getItemAriaLabel={(page) => {
                  switch (page) {
                    case "dots":
                      return "dots element aria-label";
                    case "prev":
                      return "previous page button aria-label";
                    case "next":
                      return "next page button aria-label";
                    case "first":
                      return "first page button aria-label";
                    case "last":
                      return "last page button aria-label";
                    default:
                      return `${page} item aria-label`;
                  }
                }}
              />
            </Group>
          </Paper>
        )}
      </Container>
  );
};
