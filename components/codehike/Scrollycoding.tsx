import { z } from 'zod'
import { Selection, Selectable, SelectionProvider } from 'codehike/utils/selection'
import { Block, CodeBlock, parseProps } from 'codehike/blocks'
import { RawCode, Pre, highlight } from 'codehike/code'

import { tokenTransitions } from './annotations/token-transitions'
import { focus } from './annotations/focus'

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: CodeBlock })),
})

export function Scrollycoding(props: unknown) {
  const { steps } = parseProps(props, Schema)
  return (
    <SelectionProvider className="my-4 flex gap-4">
      <div className="prose mt-32 mb-[60vh] ml-2 flex-1">
        {steps.map((step, i) => (
          <Selectable
            key={i}
            index={i}
            selectOn={['click', 'scroll']}
            className="mb-24 rounded border-l-4 border-transparent bg-zinc-500/10 px-5 py-2 data-[selected=true]:border-blue-400"
          >
            {step.title != '' && <h2 className="mt-4 text-xl">{step.title}</h2>}
            <div>{step.children}</div>
          </Selectable>
        ))}
      </div>
      <div className="w-2/5 max-w-xl bg-[#212121]">
        <div className="sticky top-16 max-h-[80vh] overflow-auto">
          <Selection
            from={steps.map((step) => (
              <Code key="code" codeblock={step.code} />
            ))}
          />
        </div>
      </div>
    </SelectionProvider>
  )
}

async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, 'github-dark')
  return (
    <Pre
      code={highlighted}
      handlers={[tokenTransitions, focus]}
      className="mt-0 mb-0 min-h-[40rem] min-w-fit"
    />
  )
}
