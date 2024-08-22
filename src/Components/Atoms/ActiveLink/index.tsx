"use client";

import { ReactElement, cloneElement, useEffect, useState } from "react";
import Link, { LinkProps } from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const [asPath, setPath] = useState<string>('')

  useEffect(() => {
    setPath(`/${window.location.hash}`)
  }, []);

  const className = asPath === rest.href
    ? activeClassName
    : ''

  return (
    <Link {...rest}>
      {cloneElement(children, { className })}
    </Link>
  )
}