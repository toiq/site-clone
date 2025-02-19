import { Button } from "@/components/button";
import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  // Extract the current URL from the request headers
  const headerList = await headers();
  const pathname = headerList.get("x-current-path");

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-8xl font-bold text-red-500">404</h2>
        <p className="text-2xl uppercase text-secondary">Page not Found</p>
        <p className="py-5 text-lg text-gray-600 sm:text-xl">
          Oops! The page you are looking for <br /> does not exist or is under
          construction.
        </p>
        <pre className="pb-5 text-gray-700">
          You were trying to access:{" "}
          <span className="font-medium">{pathname}</span>
        </pre>
        <Button size="medium" asChild>
          <Link
            href="/"
            className="mt-10 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
