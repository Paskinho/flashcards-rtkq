export type Checkbox = {};

export const Checkbox = () => {
  return (
    <Flex>
      <Text size="2">
        <label>
          <Checkbox mr="1" defaultChecked /> Agree to Terms and Conditions
        </label>
      </Text>
    </Flex>
  );
};
