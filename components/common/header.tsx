'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navigation = [
  { 
    name: '놀이터', 
    href: '/',
    description: '우리 친구들이 코딩을 배우며 놀 수 있는 즐거운 공간이에요! 🎨'
  },
  { 
    name: '코딩교실', 
    href: '/blog',
    description: '재미있는 코딩 수업과 최신 기술 이야기를 만나보세요! 🚀'
  },
  { 
    name: '장난감상자', 
    href: '/categories',
    description: '우리가 만든 멋진 프로그램들을 구경하고 직접 가지고 놀아보세요! 🎮'
  },
  { 
    name: '도움말', 
    href: '/docs',
    description: '코딩할 때 궁금한 것이 있다면 여기서 찾아보세요! 💡'
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">코딩유치원</span>
            <Image
              className="h-8 w-auto"
              src="/images/categories/blocks.png"
              alt="코딩유치원"
              width={32}
              height={32}
            />
          </Link>
        </div>
        
        {/* 모바일 메뉴 버튼 */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">메뉴 열기</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>메뉴</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>        {/* 데스크톱 네비게이션 */}
        <div className="hidden lg:flex lg:gap-x-12">
          <TooltipProvider>
            {navigation.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-[200px] text-center">
                  <p>{item.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </nav>
    </header>
  );
}
