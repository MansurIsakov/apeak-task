import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { Icons } from '@/components/icons';
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

export function StepOne() {
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <div className="w-full space-y-1.5">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="What is your title?" />
      </div>

      <div className="flex w-full flex-col gap-4 sm:flex-row">
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
          <Input id="website" placeholder="www.example.com" prefix="https://" />
        </div>
      </div>
    </div>
  );
}

export function StepTwo({ textareaRows = 5 }: { textareaRows?: number }) {
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <div className="flex w-full flex-col gap-4 sm:flex-row">
        <div className="w-full space-y-1.5">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Search for city"
            inputPrefix={<QuestionMarkCircledIcon />}
          />
        </div>

        <div className="w-full space-y-1.5">
          <Label htmlFor="employment">Employment</Label>
          <Select defaultValue="full-time">
            <SelectTrigger className="w-full sm:w-[180px]">
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
          placeholder="e.g. I joined Stripe’s Customer Success team..."
          rows={textareaRows}
        />
      </div>
    </div>
  );
}
