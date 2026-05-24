export class AppError extends Error {
  constructor(
    public override message: string,
    public code: string,
    public statusCode = 500,
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export class VideoError extends AppError {
  constructor(msg: string) {
    super(msg, 'VIDEO_ERROR', 400)
    this.name = 'VideoError'
  }
}

export class AIError extends AppError {
  constructor(msg: string) {
    super(msg, 'AI_ERROR', 502)
    this.name = 'AIError'
  }
}

export class StorageError extends AppError {
  constructor(msg: string) {
    super(msg, 'STORAGE_ERROR', 502)
    this.name = 'StorageError'
  }
}
