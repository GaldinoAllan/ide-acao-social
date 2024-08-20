"use client";

import { ReactElement, cloneElement } from "react";
import Link, { LinkProps } from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string;
  currentPath: string;
}

export function ActiveLink({ children, activeClassName, currentPath, ...rest }: ActiveLinkProps) {
  const className = currentPath === rest.href
    ? activeClassName
    : ''

  return (
    <Link {...rest}>
      {cloneElement(children, { className })}
    </Link>
  )
}