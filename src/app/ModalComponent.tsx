import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "@/components/icons/search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Save } from "@/components/icons/save";

export function ModalComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Experience</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add experience</DialogTitle>
          <DialogDescription>
            Share where you’ve worked on your profile.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4 w-full">
          <div className="w-full space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="What is your title?" />
          </div>

          <div className="flex gap-4 w-full">
            <div className="space-y-1.5 w-full">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Search for company"
                inputPrefix={<Search />}
              />
            </div>
            <div className="space-y-1.5 w-full">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder="www.example.com"
                prefix="https://"
              />
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="space-y-1.5 w-full">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Search for city"
                inputPrefix={<Search />}
              />
            </div>
            <div className="space-y-1.5 w-full">
              <Label htmlFor="employment">Employment</Label>
              <Select defaultValue="full-time">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select an employment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="gpx">GPX</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-full space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="What is your title?" />
          </div>

          <div className="w-full space-y-1.5">
            <Label htmlFor="description" className="flex gap-0.5">
              Description
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <QuestionMarkCircledIcon className="w-4 h-4 text-fg-quinary" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Some help text over here...</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Textarea
              id="description"
              placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
              rows={5}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild className="w-full">
            <Button
              type="button"
              variant="secondary"
              className="flex items-center gap-1.5"
            >
              <Save className="h-5 w-5" /> Save as draft
            </Button>
          </DialogClose>
          <DialogClose asChild className="w-full">
            <Button type="button">Add experience</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
