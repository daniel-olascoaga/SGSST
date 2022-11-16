import {app, port} from './app'
import './database'

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
