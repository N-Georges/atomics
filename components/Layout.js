import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen mb-20 md:mb-0">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
