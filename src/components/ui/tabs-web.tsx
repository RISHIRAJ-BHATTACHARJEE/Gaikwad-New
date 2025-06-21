import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

function TabsWeb({
  className,
  defaultValue = "optimax",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & { defaultValue?: string }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col", className)}
      defaultValue={defaultValue}
      {...props}
    />
  );
}

function TabsListWeb({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex w-full items-center rounded-lg p-[2px] bg-none",
        className
      )}
      {...props}
    />
  );
}

function TabsTriggerWeb({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "flex-1 inline-flex items-center justify-center px-8 py-3 text-sm font-medium uppercase transition-colors text-nowrap",
        "bg-[#2C3C43] text-white rounded-t-md",
        "data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:rounded-t-md",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

function TabsContentWeb({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none bg-white text-black p-6 rounded-b-md", className)}
      {...props}
    />
  );
}

export { TabsWeb, TabsListWeb, TabsTriggerWeb, TabsContentWeb };