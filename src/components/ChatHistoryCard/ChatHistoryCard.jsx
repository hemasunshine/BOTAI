import { Box, Typography, Stack } from '@mui/material';
import { format, isEqual, startOfDay, add } from 'date-fns';
import ChattingCard from '../ChattingCard/ChattingCard';

export default function ChatHistoryCard({ details }) {
  const formatDate = (date) => {
    const today = startOfDay(new Date());

    if (isEqual(date, today)) {
      return `Today's chats`;
    } else if (isEqual(date, add(today, { days: -1 }))) {
      return `Yesterday's chats`;
    } else {
      return format(date, 'do LLL yyyy');
    }
  };

  return (
    <Box>
      <Typography variant="h6" fontWeight={700} mb={2}>
        {formatDate(startOfDay(new Date(details.datetime)))}
      </Typography>

      <Stack spacing={{ xs: 2, md: 3 }}>
        {details.chat?.map((item, index) => (
          <ChattingCard details={item} readOnly key={index} />
        ))}
      </Stack>
    </Box>
  );
}
