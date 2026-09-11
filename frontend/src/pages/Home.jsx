import { useSelector } from "react-redux";
import PageShell from "../components/layout/PageShell";
import Loading from "../components/common/Loading";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  const { profile, status, error } = useSelector((state) => state.portfolio);

  if (status === "failed") {
    return (
      <PageShell>
        <div className="py-20 text-center">
          <p className="text-lg font-medium text-red-600">Couldn't load the portfolio.</p>
          <p className="mt-2 text-sm text-gray-500">{error}</p>
        </div>
      </PageShell>
    );
  }

  if (status === "loading" || status === "idle" || !profile) return <Loading />;

  return (
    <PageShell>
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills />
      <ProjectsPreview />
      <ContactCTA profile={profile} />
    </PageShell>
  );
}