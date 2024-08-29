import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return <section>
    <p>Welcome to your dashboard</p>
    <UserButton afterSwitchSessionUrl="/" />
  </section>
}
