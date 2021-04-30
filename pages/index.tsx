import {MainLayout} from "../layouts/main_layout/MainLayout";
import {TotalsSection} from "../components/sections/totals-section/TotalsSection";
import {LastOrdersSection} from "../components/sections/last-orders-section/LastOrdersSection";
import {OrdersSection} from "../components/sections/orders-section/OrdersSection";

export default function Home() {
  return (
      <MainLayout>
        <TotalsSection/>
        <LastOrdersSection/>
        <OrdersSection/>
      </MainLayout>
  )
}
