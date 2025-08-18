import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { FaExclamationTriangle } from "react-icons/fa";

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorMessage = ({
  message = "Something went wrong.",
  onRetry,
}: ErrorMessageProps) => {
  return (
    <Alert variant="destructive">
      <FaExclamationTriangle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="flex flex-col gap-2">
        <span>{message}</span>
        {onRetry && (
          <button
            onClick={onRetry}
            className="self-start text-sm px-3 py-1 text-black rounded transition bg-gray-200"
          >
            Retry
          </button>
        )}
      </AlertDescription>
    </Alert>
  );
};

export default ErrorMessage;
