import { Button, Group, TextInput, Title, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { GenericForm } from "../../components/GenericForm";
import { routes } from "../../utils/routes";
import styles from "./CreateItem.module.scss";

export interface FormFields {
  title: string;
  description: string;
}

export const CreateItem = () => {
  const navigate = useNavigate();
  const isLoading = false;
  const isSuccess = false;

  const form = useForm<FormFields>({
    initialValues: {
      title: "",
      description: "",
    },

    validate: {
      title: (value) => {
        const len = value.trim().length;
        if (!len) return "Title should have more than 1 character";
        if (len > 50) return "Title can have max 50 characters";
        return null;
      },
      description: (value) => {
        const len = value.trim().length;
        if (len < 7) return "Description should have 7 or more characters";
        if (len > 50) return "Description can have max 50 characters";
        return null;
      },
    },
  });

  const create = (values) => {
  };

  return (
      <Stack align="center" className={styles.stack}>
        <GenericForm
          submitCallback={form.onSubmit(create)}
          className={styles.form}
        >
          <Title className={styles.heading} size="h1">
            Create
          </Title>
          <TextInput
            label="Title"
            placeholder="title"
            {...form.getInputProps("title")}
          />
          <TextInput
            label="Description"
            placeholder="description"
            {...form.getInputProps("description")}
          />
          <Group position="left" mt="xl">
            <Button loading={isLoading} type="submit">
              Create
            </Button>
          </Group>
        </GenericForm>
      </Stack>
  );
};
