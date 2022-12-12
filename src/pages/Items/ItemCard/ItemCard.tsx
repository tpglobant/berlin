import { Card, Text, Badge, Group } from "@mantine/core";
import styles from "./ItemCard.module.scss";

export type Item = {
  title: string;
  description: string;
  id: number;
};

export const ItemCard = ({ title, description }) => {
  return (
    <Card withBorder radius="md">
      <Text
        className={styles.cardTitle}
        size="md"
        weight={500}
        mt="md"
        mb="sm"
      >
        {title}
      </Text>
      <Text
        className={styles.cardDescription}
        size="sm"
        color="dimmed"
        mt="sm"
      >
        {description}
      </Text>
      <Group position="right" mt="sm">
        <Badge color="pink" variant="light">
          badge
        </Badge>
      </Group>
    </Card>
  );
};
