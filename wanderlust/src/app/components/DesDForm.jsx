'use client'
import { Button, FieldError, Input, Label, TextArea, TextField, Select, ListBox } from "@heroui/react";

const DesDForm = ({formSubmitAction}) => {

    return (
        <div className="">
            <form action={formSubmitAction}
                className="p-10 space-y-8 py-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                        <TextField name="destination_name" isRequired>
                            <Label className="text-white">Destination Name</Label>
                            <Input placeholder="Bali Paradise" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    <TextField name="country" isRequired>
                        <Label className="text-white">Country</Label>
                        <Input  placeholder="Indonesia" className="rounded-2xl" />
                        <FieldError />
                    </TextField>

                    <div>
                        <Select
                            name="category"
                            isRequired
                            className="w-full"
                            placeholder="Select category"
                        >
                            <Label className="text-white">Category</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Beach" textValue="Beach">
                                        Beach
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Mountain" textValue="Mountain">
                                        Mountain
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="City" textValue="City">
                                        City
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Adventure" textValue="Adventure">
                                        Adventure
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Cultural" textValue="Cultural">
                                        Cultural
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Luxury" textValue="Luxury">
                                        Luxury
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Price */}
                    <TextField name="price" type="number" isRequired>
                        <Label className="text-white">Price (USD)</Label>
                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    <TextField name="duration" isRequired>
                        <Label className="text-white">Duration</Label>
                        <Input
                            placeholder="7 Days / 6 Nights"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                        <TextField name="departure_date" type="date" isRequired>
                            <Label className="text-white">Departure Date</Label>
                            <Input type="date" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="md:col-span-2">
                        <TextField name="image_url" isRequired>
                            <Label className="text-white">Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
                            <Label className="text-white">Description</Label>
                            <TextArea
                                placeholder="Describe the travel experience..."
                                className="rounded-3xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                <Button
                    type="submit"
                    variant="outline"
                    // isLoading={isPending}
                    className=" rounded-none w-full bg-cyan-500 text-white"
                >
                    {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
                    Add Travel Package
                </Button>
            </form>
        </div>
    );
};

export default DesDForm;