import { GoCheck } from "react-icons/go";
import { HiMiniChevronUpDown } from "react-icons/hi2";

import * as React from "react";

import * as RPNInput from "react-phone-number-input";

import flags from "react-phone-number-input/flags";

import en from "react-phone-number-input/locale/en";
import ar from "react-phone-number-input/locale/ar";

import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

import { cn } from "../../lib/utils";
import { ScrollArea } from "./scroll-area";
import useIsRTL from "../../hooks/useIsRTL";
import { useTranslation } from "react-i18next";

const PhoneInput = React.forwardRef(
  ({ className, onChange, ...props }, ref) => {
    const isRtl = useIsRTL();
    return (
      <RPNInput.default
        ref={ref}
        className={cn("flex gap-3 px-2 py-1", className)}
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        labels={isRtl ? ar : en}
        international
        /**
         * Handles the onChange event.
         *
         * react-phone-number-input might trigger the onChange event as undefined
         * when a valid phone number is not entered. To prevent this,
         * the value is coerced to an empty string.
         *
         * @param {E164Number | undefined} value - The entered value
         */
        onChange={(value) => onChange?.(value || "")}
        {...props}
      />
    );
  }
);
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef(({ className, ...props }, ref) => (
  <input
    className={cn("rounded-e-lg rounded-s-none", className)}
    {...props}
    ref={ref}
  />
));
InputComponent.displayName = "InputComponent";

const CountrySelect = ({ disabled, value, onChange, options }) => {
  const t = useTranslation();
  const handleSelect = React.useCallback(
    (country) => {
      onChange(country);
    },
    [onChange]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={"outline"}
          size={"sm"}
          className={cn("flex gap-2 px-1 rounded-e-lg rounded-s-none")}
          disabled={disabled}
        >
          <HiMiniChevronUpDown
            className={cn(
              "h-4 w-4 opacity-50",
              disabled ? "hidden" : "opacity-100"
            )}
          />
          <FlagComponent country={value} countryName={value} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 z-[1000]">
        <Command>
          <CommandList>
            <ScrollArea className="h-72">
              <CommandInput placeholder={t("search_country")} />
              <CommandEmpty>{t("no_country_found")}</CommandEmpty>
              <CommandGroup>
                {options
                  .filter((x) => x.value)
                  .map((option) => (
                    <CommandItem
                      className="gap-2"
                      key={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <FlagComponent
                        country={option.value}
                        countryName={option.label}
                      />
                      <span className="flex-1 text-sm">{option.label}</span>
                      {option.value && (
                        <span className="text-sm text-foreground/50">
                          {`+${RPNInput.getCountryCallingCode(option.value)}`}
                        </span>
                      )}
                      <GoCheck
                        className={cn(
                          "ml-auto h-4 w-4",
                          option.value === value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};
FlagComponent.displayName = "FlagComponent";

export { PhoneInput };
