import React, { useState } from "react";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "../../lib/utils";
import { format } from "date-fns";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export function SampleDatePicker({ date, setDate }) {
  const { t } = useTranslation();
  return (
    <Popover key={date?.getDate()}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal border-slate-400 h-11",
            !date && "text-muted-foreground"
          )}
        >
          <IoCalendarNumberOutline className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{t("pic_date")}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-full p-0">
        <Calendar
          mode="single"
          captionLayout="dropdown-buttons"
          hideWeekdayRow={false}
          selected={date}
          onSelect={setDate}
          fromYear={1960}
          toYear={new Date().getFullYear()}
        />
      </PopoverContent>
    </Popover>
  );
}
