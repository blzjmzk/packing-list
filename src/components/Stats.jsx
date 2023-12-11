import { Text, Box } from "@chakra-ui/react";

const Stats = ({ items }) => {
  if (!items.length) return;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <>
      <Box marginTop={4}>
        {percentage === 100 ? (
          <Text>Everything packed! </Text>
        ) : (
          <Text as="div">
            You have {numItems} items on your packing list
            <br />
            You already packed {numPacked} items ({percentage}%)
          </Text>
        )}
      </Box>
    </>
  );
};

export default Stats;
