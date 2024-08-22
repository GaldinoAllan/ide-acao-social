"use client";

import { ReactElement, cloneElement } from "react";
import Link, { LinkProps } from "next/link";
import { useEffect, useState } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const [asPath, setAsPath] = useState<string>('');

  useEffect(() => {
    setAsPath(`/${window.location.hash}`);
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