import { useNavigate } from "react-router-dom";

export function parseQueryString(queryString: string): Record<string, string> {
    const query: Record<string, string> = {};
    const pairs = queryString.slice(1).split("&");
  
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      if (key && value) {
        query[key] = decodeURIComponent(value);
      }
    }
    return query;
}

export function Go(path: string, replace: boolean = false) {
    const navigate = useNavigate();
    navigate(path, {replace})
}