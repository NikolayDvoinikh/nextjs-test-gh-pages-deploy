import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { getDate } from "@/utils";
import { analytics } from "@/utils/analytics";

const Page = async () => {
  const TRACKING_DAYS = 7;

  const pageviews = await analytics.retrieveDays("pageview", 7);

  const totalPageViews = pageviews.reduce(
    (acc, curr) =>
      acc + curr.events.reduce((acc, curr) => acc + Object.values(curr)[0]!, 0),
    0
  );

  const avgVisitorsPerDay = (totalPageViews / TRACKING_DAYS).toFixed(1);

  const amtVisitorsToday = pageviews
    .filter((ev) => ev.date === getDate())
    .reduce(
      (acc, curr) =>
        acc +
        curr.events.reduce((acc, curr) => acc + Object.values(curr)[0]!, 0),
      0
    );

    return (
    <div className="min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">
        <AnalyticsDashboard
          avgVisitorsPerDay={avgVisitorsPerDay}
          amtVisitorsToday={amtVisitorsToday}
          timeseriesPageviews={pageviews}
        />
      </div>
    </div>
  );
};

export default Page;
