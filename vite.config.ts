import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import getGitInfo, { GitInfo, Params } from '@harvey0379/maojian'

const param: Params = {}
const gitInfo: GitInfo = getGitInfo(param)
console.log(gitInfo)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
