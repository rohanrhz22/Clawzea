import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
    name: z.string().min(1, { message: "Pet name is required" }),
    species: z.enum(["dog", "cat", "other"]),
    breed: z.string().optional(),
    gender: z.enum(["male", "female"]),
    age: z.string().min(1, { message: "Age is required" }), // Using string for simplicity, can parse later
    weight: z.string().min(1, { message: "Weight is required" }),
    bio: z.string().optional(),
});

interface PetOnboardingModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (data: z.infer<typeof formSchema>) => void;
}

export function PetOnboardingModal({
    open,
    onOpenChange,
    onSubmit,
}: PetOnboardingModalProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            species: "dog",
            breed: "",
            gender: "male",
            age: "",
            weight: "",
            bio: "",
        },
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        onSubmit(data);
        form.reset();
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] h-[90vh] sm:h-auto overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                        Tell us about your pet
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        We need some details to customize your dashboard.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="col-span-1 sm:col-span-2">
                                        <FormLabel>Pet's Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Buddy" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Species */}
                            <FormField
                                control={form.control}
                                name="species"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Species</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select species" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="dog">Dog</SelectItem>
                                                <SelectItem value="cat">Cat</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Breed */}
                            <FormField
                                control={form.control}
                                name="breed"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Breed</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Golden Retriever" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Gender */}
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className="col-span-1 sm:col-span-2">
                                        <FormLabel>Gender</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex space-x-4"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="male" id="male" />
                                                    <FormLabel htmlFor="male">Male</FormLabel>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="female" id="female" />
                                                    <FormLabel htmlFor="female">Female</FormLabel>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Age */}
                            <FormField
                                control={form.control}
                                name="age"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Age (years/months)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. 2 years" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Weight */}
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Weight (kg)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. 12" type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Bio */}
                            <FormField
                                control={form.control}
                                name="bio"
                                render={({ field }) => (
                                    <FormItem className="col-span-1 sm:col-span-2">
                                        <FormLabel>Short Bio</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Tell us a bit about their personality..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                            Complete Profile
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
