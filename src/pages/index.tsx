import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Container, Typography } from '@mui/material';
// import {
//   SharedSpaceComponent,
//   SharedComponent,
//   ExclusiveVendorCComponent,
// } from '@/components/common/dynamic-method-1';

import {
  SharedSpaceComponent,
  SharedComponent,
  ExclusiveVendorCComponent,
} from '@/components/common/dynamic-method-2';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Container
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 !bg-primary bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 ">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>

      <SharedComponent />

      <SharedSpaceComponent />

      <ExclusiveVendorCComponent />
      <Typography color="primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        aperiam hic id numquam at doloribus unde commodi tempora ullam
        reprehenderit culpa modi dolor error, maxime quam exercitationem et
        nostrum incidunt!
      </Typography>
    </Container>
  );
}
