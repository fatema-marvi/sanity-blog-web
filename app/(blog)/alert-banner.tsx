"use client"

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div>
   
      <div className="py-2 text-center text-sm">
        BLOGS
        {/* {pending ? (
          "Disabling draft mode..."
        ) : (
          <>
            {"Previewing drafts. "}
            <button
              type="button"
              onClick={() =>
                startTransition(() =>
                  disableDraftMode().then(() => {
                    router.refresh();
                  }),
                )
              }
              className="hover:text-cyan underline transition-colors duration-200"
            >
              Back to published
            </button>
          </>
        )} */}
      </div>
    </div>
  );
}
