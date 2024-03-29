import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
  })

  return (
    <EditorContent className="max-w-[700px] mx-auto pt-16 prose prose-violet" editor={editor} />
  )
}