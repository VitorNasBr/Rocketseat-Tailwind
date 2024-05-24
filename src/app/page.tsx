import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from '@/components/input'
import * as FileInput from '@/components/Form/FileInput'
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">

        <div className="flex flex-col lg:flex-row justify-between pb-5 border-b border-zinc-300 dark:border-zinc-700 lg:items-center gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>

            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>
        
        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
              <div className="lg:grid gap-6 lg:grid-cols-2 flex flex-col">
                <Input.Root>
                  <Input.Control id="firstName" defaultValue="Vitor"/>
                </Input.Root>
                <div className="flex flex-col gap-3 lg:block">
                  <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">Last Name</label>
                </div>
                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Medina"/>
                </Input.Root>
              </div>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email adress</label>
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500"/>
                </Input.Prefix>
                <Input.Control id="email" type="email" defaultValue="vitornas02@gmail.com"/>
              </Input.Root>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your Photo
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">This will be displayed on your profile</span>
            </label>

              <FileInput.Root className="flex lg:flex-row flex-col lg:items-start gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
                
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</label>
              <Input.Root>
                <Input.Control id="role" defaultValue="CTO"/>
              </Input.Root>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Country</label>
              
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil"/>
              <SelectItem value="us" text="United States"/>
            </Select>

          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Timezone</label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="utc8" text="Pacific Standart Time (PST) (UTC-08:00)"/>
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)"/>
            </Select>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">Write a short introduction</span>
            </label>
              <div className="space-y-3">
                <div className="lg:grid gap-3 lg:grid-cols-2 flex flex-col">
                  <Select placeholder="" defaultValue="normal">
                    <SelectItem value="normal" text="Normal Text"/>
                    <SelectItem value="md" text="Mark down"/>
                  </Select>

                  <div className="flex items-center gap-1">
                    <Button type="button" variant="ghost">
                      <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                  </div>
                </div>
                
                <Textarea id="bio" defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."/>
              </div>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portifolio projects
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">Share a few snippets of you work</span>
            </label>
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple/>
              </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>

            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
