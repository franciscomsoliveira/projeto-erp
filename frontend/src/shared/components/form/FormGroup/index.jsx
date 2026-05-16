import { Group, GroupTitle, GroupContent } from "./styles";

export function FormGroup({ title, children }) {
  return (
    <Group>
      {title && <GroupTitle>{title}</GroupTitle>}

      <GroupContent>{children}</GroupContent>
    </Group>
  );
}
