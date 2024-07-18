type ClientErrorsStatus = 400 | 401 | 404

type ServerErrorsStatus = 500

export type ErrorMessageResponse = {
    status: ClientErrorsStatus | ServerErrorsStatus
    message: string
}
