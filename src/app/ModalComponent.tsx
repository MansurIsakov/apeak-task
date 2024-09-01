import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ModalComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Experience</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 overflow-hidden sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>
            <div
              className="after: relative mb-4 hidden h-12 w-12 rounded-lg border border-component-border p-3 shadow-xs sm:block"
              aria-hidden={true}>
              <span className="absolute -left-[24px] -top-[24px] h-[96px] w-[96px] rounded-full border border-gray-200 opacity-50"></span>
              <span className="absolute -left-[46px] -top-[46px] h-[140px] w-[140px] rounded-full border border-gray-200 opacity-50"></span>
              <span className="absolute -left-[64px] -top-[64px] h-[182px] w-[182px] rounded-full border border-gray-200 opacity-50"></span>
              <span className="absolute -left-[84px] -top-[84px] h-[226px] w-[226px] rounded-full border border-gray-200 opacity-50"></span>
              <Icons.Flag className="h-6 w-6" />
            </div>
            Add experience
          </DialogTitle>
          <DialogDescription>
            Share where you’ve worked on your profile.
          </DialogDescription>
        </DialogHeader>

        <div className="flex w-full flex-col items-center space-y-4">
          <div className="w-full space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="What is your title?" />
          </div>

          <div className="flex w-full gap-4">
            <div className="w-full space-y-1.5">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Search for company"
                inputPrefix={<Icons.Search />}
              />
            </div>
            <div className="w-full space-y-1.5">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder="www.example.com"
                prefix="https://"
              />
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="w-full space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Search for city"
                inputPrefix={<Icons.Search />}
              />
            </div>
            <div className="w-full space-y-1.5">
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
            <Label htmlFor="title-2">Title</Label>
            <Input id="title-2" placeholder="What is your title?" />
          </div>

          <div className="w-full space-y-1.5">
            <Label htmlFor="description" className="flex gap-0.5">
              Description
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <QuestionMarkCircledIcon className="h-4 w-4 text-fg-quinary" />
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
              className="flex items-center gap-1.5">
              <Icons.Save className="h-5 w-5" /> Save as draft
            </Button>
          </DialogClose>
          <DialogClose asChild className="w-full">
            <Button type="button" disabled={false}>
              Add experience
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
