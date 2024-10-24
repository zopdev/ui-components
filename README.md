# UI Component Library

This component library is made for React using tailwindcss. 
Goal of this project is to provide ready to use UI components to
develop UI applications faster. 

All components are documented in storybook. Use `npm run start`
to start the storybook locally. Latest version of stories can also
be accessed at https://zop.dev/ui-components 

## Developer Notes
All components needs to support variety of themes to be used across
multiple projects with different design language. Therefore, we can
not use absolute values for colors, sizes, margin, padding, font family
etc in components. Using arbitary values like `bg-[#bada55] text-[22px]`
are not allowed. 

For colors, do not use something like `bg-slate-800`. Only allowed values are: primary, secondary, white, black, gray,
red, yellow, green. In this context, red is used as a variable instead of 
an absolute color like #ff0000. One can use `text-red-200` to indicate
error in the component or `text-yellow-500` to indicate warning. A theme can choose
to override this value to something which is more appropriate.

Similarly, we will only use tailwind default classes for font-size. 
