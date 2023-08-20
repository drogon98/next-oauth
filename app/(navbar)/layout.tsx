export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <button>Login</button>
      </nav>
      {children}
    </div>
  );
}
