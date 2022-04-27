import {
  capitalize,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { Layout } from '../components/layouts'

type TTheme = 'light' | 'dark' | 'custom'

const themes: TTheme[] = ['light', 'dark', 'custom']

const ThemeChangerPage = () => {
  const [currentTheme, setCurrentTheme] = useState<TTheme>('light')

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value as TTheme)
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              {themes.map((theme) => (
                <FormControlLabel
                  key={theme}
                  value={theme}
                  control={<Radio />}
                  label={capitalize(theme)}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default ThemeChangerPage
