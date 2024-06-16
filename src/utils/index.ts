import { format, subDays } from "date-fns";

export const getDate = (sub: number = 0) => {
  const datrXDaysAgo = subDays(new Date(), sub);
  return format(datrXDaysAgo, "dd/MM/yyyy");
};
