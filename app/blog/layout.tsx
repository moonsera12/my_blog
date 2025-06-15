import { Metadata } from 'next';
import { metadata as blogMetadata } from './metadata';

export async function generateMetadata(): Promise<Metadata> {
  return blogMetadata;
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
