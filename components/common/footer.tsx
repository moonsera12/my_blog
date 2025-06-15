import Link from 'next/link';

export function Footer() {  const navigation = [
    { name: '홈', href: '/' },
    { name: '카테고리', href: '/categories' },
    { name: '포스트', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <footer className="border-t py-8 md:py-6">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-12">
        <div className="text-center md:text-left">
          <p className="text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} AI 학습 블로그.
            <br className="inline md:hidden" /> 모든 권리 보유.
          </p>
        </div>
        <nav className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
