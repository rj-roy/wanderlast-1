"use client";
import {Calendar, DateField, DatePicker, Label} from "@heroui/react";
import {useState} from "react";

export default function DateFieldD() {
  const [ depertureDate, setDepertureDate ] = useState(null)
  return (
    <div className="flex w-full flex-col gap-4">
      <DatePicker name="date" onChange={setDepertureDate}>
        <Label>Date</Label>
        <DateField.Group fullWidth>
          <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
          <DateField.Suffix>
            <DatePicker.Trigger>
              <DatePicker.TriggerIndicator />
            </DatePicker.Trigger>
          </DateField.Suffix>
        </DateField.Group>
        <DatePicker.Popover>
          <Calendar aria-label="Event date">
            <Calendar.Header>
              <Calendar.YearPickerTrigger>
                <Calendar.YearPickerTriggerHeading />
                <Calendar.YearPickerTriggerIndicator />
              </Calendar.YearPickerTrigger>
              <Calendar.NavButton slot="previous" />
              <Calendar.NavButton slot="next" />
            </Calendar.Header>
            <Calendar.Grid>
              <Calendar.GridHeader>
                {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
              </Calendar.GridHeader>
              <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
            </Calendar.Grid>
            <Calendar.YearPickerGrid>
              <Calendar.YearPickerGridBody>
                {({year}) => <Calendar.YearPickerCell year={year} />}
              </Calendar.YearPickerGridBody>
            </Calendar.YearPickerGrid>
          </Calendar>
        </DatePicker.Popover>
      </DatePicker>
      {/* <Description>Current value: {value ? value.toString() : "(empty)"}</Description> */}
      {/* <div className="flex gap-2">
        <Button variant="tertiary" onPress={() => setValue(today(getLocalTimeZone()))}>
          Set today
        </Button>
        <Button variant="tertiary" onPress={() => setValue(null)}>
          Clear
        </Button>
      </div> */}
    </div>
  );
}