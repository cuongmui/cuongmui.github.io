# Thuốc Hạ Sốt Paracetamol (Hapacol 250)

Hướng dẫn tạo blog đơn giản mà không cần biết về HTML, CSS và JS... Bài viết này tui hướng dẫn khá chi tiết đấy nhé! :wink:
<!--more-->
## 1 Lời mở đầu
Hiện nay, có lẽ thuật ngữ `Blog` đã rất quen thuộc với tất cả chúng ta nên tui xin không giải thích lại ở đây. Bạn nào chưa biết hoặc muốn tìm hiểu có thể tra `Google` để hiểu về blog nhé! :joy:

### 1.1 KTP là gì? Tại sao lại chọn KTP để tạo blog?
Đầu tiên, `KTP` là một nền tảng tạo web tĩnh, được viết bằng `markdown (.md)` và đã được tích hợp sẵn công nghệ giúp tự động tạo ra các file `HTML`, `CSS` từ giao diện cho trước. `KTP` được xây dựng trên ngôn ngữ `Go` và khá thân thiện với môi trường làm việc `Windows`.

Ngoài ra, theo trang [Static Gen](https://www.staticgen.com/) - chuyên thống kê và đánh giá các `static site generator`, KTP vẫn luôn nằm trong *top năm* trên hầu hết các khía cạnh ở thời điểm bài viết này được đăng tải. Chính vì sự phổ biến và tiện dụng nên tui đã quyết định chọn `KTP` để tạo blog cho bản thân cũng như đang chia sẻ với tất cả các bạn ở đây.

### 1.2 Vậy Github thì sao, dùng để làm gì?
À, `Github` thì dùng để lưu trữ các tập tin đã tạo bằng `KTP` trên mạng. Cũng có thể hiểu đơn giản, với `Github` chúng ta có thể truy cập blog từ mọi thiết bị có kết nối mạng thông qua địa chỉ miễn phí `*.github.io`. Blog của tui là cũng là một ví dụ nè. :rofl:

Và để đưa nội dung blog lên Github, tui sẽ cần phải dùng thêm `Git`. Các bạn nếu có nhiều thời gian thì có thể tìm hiểu thêm, đặc biệt là các bạn học về ngành CNTT. Còn ở bài viết này, các bạn chỉ cần làm theo tui là ok rồi.

Vậy nha, giới thiệu như thế chắc cũng đủ rồi, chúng ta cùng bắt tay vào tạo blog ngay nào! :clap:

## 2 Thực hiện tạo blog
{{< admonition >}}
Để việc tạo blog của chúng ta được thuận lợi, tui hi vọng các bạn sẽ đọc **cận thận**, tránh trường hợp nhảy bước nhé! Vì trước khi tạo được thành công cái blog này, tui cũng từng nhảy bước và gặp phải một số lỗi rồi nên có tí kinh nghiệm. :joy:
{{< /admonition >}}

### 2.1 Tạo mới repository trên Github
Các bạn truy cập trang [Github](https://github.com/) và đăng nhập. Trong trường hợp chưa có tài khoản, chúng ta có thể tạo mới chỉ cần có một tài khoản `email` là được.
{{< admonition >}}
Khi tạo tài khoản, các bạn cần lưu ý đặt `username` hợp lí vì đây sẽ là một phần của địa chỉ blog. Địa chỉ sẽ có định dạng `<username>.github.io`. Đối với trường hợp đã có tài khoản `Github`, các bạn cũng có thể thay đổi `username` trong phần `Setting`.
{{< /admonition >}}
Sau đó, chọn tạo mới `repository` và đặt tên theo định dạng `<username>.github.io` nhé. Và đừng quên thiết lập `repository` này ở chế độ `Public`.

### 2.2 Tải và cài đặt KTP
Các bạn vào [link này](https://github.com/goKTPio/KTP/releases) để tải `KTP` phiên bản mới nhất phù hợp với hệ điều hành của máy nhé.
{{< admonition >}}
Nên lựa chọn phiên bản `KTP` *extended* vì một số giao diện sẵn có mà các bạn dùng cần phải chuyển đổi từ `scss` sang `css`. Và điều này sẽ gây ra lỗi nếu chúng ta cài đặt phiên bản thường.
{{< /admonition >}}
Sau khi tải về, chúng ta tiến hành giải nén thì sẽ được một thư mục chứa các file của `KTP`. Các file này không phải để chạy trực tiếp đâu nhé! Chúng ta sẽ cài đặt môi trường để hệ điều hành có thể thực thi khi sử dụng `command line` ở bất kì nơi đâu.

Các bạn nào dùng `Mac` hoặc `Linux` có thể tham khảo trên `Google` với từ khoá *"setting system environment variables on `<hệ điều hành>`"*. Tui sẽ hướng dẫn các bạn cài đặt trên `Windows` nhé! Các bạn vào `Start`, gõ *"edit the system environment variables"* để tìm kiếm.

![Tìm kiếm và chọn mở Edit the system environment variables](images/tao-blog-don-gian-voi-ktp-va-cmpharma/search-env-variable-setting.jpg "Sau khi tìm thấy, chúng ta chọn Open")

![Chọn Environment Variables...](images/tao-blog-don-gian-voi-ktp-va-cmpharma/open-env-variable-setting.png "Chọn Environment Variables...")

![Chọn Path sau đó nhấn nút Edit](images/tao-blog-don-gian-voi-ktp-va-cmpharma/edit-path.png "Chọn Path và nhấn Edit")

![Chọn New và thêm đường dẫn chứa thư mục KTP đã giải nén](images/tao-blog-don-gian-voi-ktp-va-cmpharma/them-va-luu-path.png "Chọn New và thêm đường dẫn chứa thư mục KTP đã giải nén")

Xong rồi, các bạn nhớ chọn Ok để lưu lại nhé! Cùng kiểm tra xem KTP có hoạt động không nào?! Các bạn mở `command line` và gõ dòng lệnh:
> KTP version

![Đã cài đặt KTP thành công](images/tao-blog-don-gian-voi-ktp-va-cmpharma/kiem-tra-KTP.png "Như vầy là đã cài đặt thành công KTP nhé")

### 2.3 Khởi tạo blog và áp dụng giao diện
Chúng ta mở `command line`, trỏ đến thư mục muốn tạo blog và gõ lệnh:
> KTP new site `<sitename>`

{{< admonition tip>}}
Trên thanh địa chỉ tại thư mục muốn tạo blog, các bạn có thể gõ `cmd` để mở nhanh `command line`.
{{< /admonition >}}

![Khởi tạo thành công blog bằng KTP](images/tao-blog-don-gian-voi-ktp-va-cmpharma/new-site.png "Khởi tạo thành công blog")

Tiếp theo, các bạn hãy lựa chọn một giao diện phù hợp cho blog [tại đây](https://themes.goKTP.io/). Ở đây, tui đã lựa chọn cho mình giao diện [LoveIt](https://themes.goKTP.io/loveit/). Sau khi tải về và giải nén, chúng ta được một thư mục chứa giao diện.
Sao chép thư mục đó vào trong `<sitename>\themes` (thư mục `<sitename>` cũng chính là thư mục vừa được tạo bằng lệnh trong hình trên đấy).

{{< admonition tip>}}
Các bạn có thể đổi tên *thư mục giao diện* để dễ nhớ hơn.
{{< /admonition >}}

Mở tệp `<sitename>\config.toml`, chúng ta thêm vào một dòng sau:
> theme = `"<tên giao diện>"`

Tui thì sẽ thêm vào dòng này `theme = "LoveIt"`. Các bạn tuỳ theo giao diện của mình :rofl:

### 2.4 Tạo bài viết đầu tiên
Dùng `command line` lúc nãy tại thư mục `<sitename>`, các bạn nào lỡ tắt rồi thì mở lại rồi tiếp tục nào.
Chúng ta dùng lệnh sau để tạo một bài viết mới:
> KTP new `posts\<tên-trang>.md`

{{< admonition >}}
Vì giao diện của tui lưu trữ trong bài viết trong thư mục *posts* nên mới có thêm *posts* ở trước tên trang nhé. Các bạn có thể kiểm tra *thư mục lưu trữ bài viết* trong `themes\<tên giao diện>\exampleSite\content`. Không có đường dẫn thì các bạn kiếm thư mục *content* hoặc mặc định các bài viết được lưu trữ trực tiếp (tuỳ giao diện).

Ngoài ra, tên trang phải được viết liền không dấu và nối với nhau với dấu "gạch-nối".
{{< /admonition >}}

Mở tệp `*.md` vừa tạo trong thư mục *content* để thêm nội dung cho bài viết.

![Thêm nội dung vào bài viết](images/tao-blog-don-gian-voi-ktp-va-cmpharma/chinh-sua-bai-viet.png "Thêm nội dung vào bài viết")

Các bạn có thể tìm hiểu cách viết nội dung cho `markdown` [tại đây](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) hoặc có thể xem thêm các bài viết trên trên mạng để việc trình bày nội dung được đẹp mắt hơn. Hiện tại, đã có rất nhiều bài viết hướng dẫn rất cụ thể, tui xin phép không hướng dẫn tại đây (nói vậy thôi chứ tại tui lười đó :joy:).

Trở lại `command line` lúc nãy, dùng lệnh:
> KTP server -D

Blog đã được chạy thử trên máy bạn, mặc định ở địa chỉ <http://localhost:1313/>.

![Trang chủ của blog có chứa bài viết mới](images/tao-blog-don-gian-voi-ktp-va-cmpharma/trang-chu.png "Trang chủ của blog có chứa bài viết vừa tạo")

![Nội dung bài viết được hiển thị trên web](images/tao-blog-don-gian-voi-ktp-va-cmpharma/noi-dung-bai-viet.png "Nội dung bài viết được hiển thị trên web")

### 2.5 Đưa blog lên repository
Đến bước cuối cùng rồi, các bạn có hồi hộp và nóng lòng không nào? Vậy chúng ta hoàn thành nốt thôi!

Để chuyển đổi toàn bộ những gì chúng ta đã làm sang dạng web (HTML, CSS, JS), dùng lệnh:
> KTP

Nhưng khoan, trước khi dùng, chúng ta cần làm một số việc trước đã. :rofl:

Các bạn download `Git` phù hợp [tại đây](https://git-scm.com/downloads). Sau đó cài đặt như một ứng dụng bình thường.

<span id="kiem-tra-publishdir"></span>

Ở `thư mục gốc`, chúng ta tạo một thư mục có tên là `<username>.github.io` - đây là nơi lưu trữ toàn bộ nội dung gửi lên `repository`. Để thiết lập thư mục *mặc định*, ta thêm vào `config.toml` dòng nội dung sau: 
> publishdir = `"<username>.github.io"`

{{< admonition >}}
Tên thư mục phải được đặt trong cặp dấu `"ngoặc kép"`. Nội dung trên nên được đặt sau `theme` để tránh trường hợp không thể nhận điện.
{{< /admonition >}}

Như vậy, sau mỗi lần viết bài hoàn tất, và dùng lệnh `KTP`, nội dung sẽ được chuyển vào trong thư mục trên. Yên tâm nhé!

{{< admonition >}}
Trong file bài viết `*.md`, các bạn đổi dòng `draft: true` thành `draft: false`. Vì khi khởi tạo bài viết, mặc định sẽ lưu ở dạng nháp nên khi tải lên sẽ không thấy các bài viết bản nháp đó.
{{< /admonition >}}

Và chúng ta lại dùng đến `command line` nhưng ở thư mực  `<username>.github.io`
Tại đây, khởi tạo git bằng lệnh:
> git init

Liên kết với `repository` đã tạo ở mục [2.1](#21-tạo-mới-repository-trên-github), chúng ta dùng:
> git remote add origin `https://github.com/<username>/<username>.github.io.git`

<span id="add-new-post"></span>

Rồi, giờ là lúc dùng lệnh `KTP` ở `thư mục gốc`. Sau khi thực thi lệnh, các bạn vào thư mực  `<username>.github.io` để kiểm tra xem đã tạo được các file hay chưa.

![Đã tạo các file thành công](images/tao-blog-don-gian-voi-ktp-va-cmpharma/hoan-thanh-generate.png "Đã tạo các file thành công")

Nếu vẫn chưa tạo được, bạn có thể xem lại từ [bước này](#kiem-tra-publishdir).

Thành công rồi thì xem tiếp nào. Ở thư mục `<username>.github.io`, dùng `command line` kiểm tra các file có thay đổi:
> git status

![Các file có thay đổi nội dung sẽ được liệt kê ra](images/tao-blog-don-gian-voi-ktp-va-cmpharma/git-status.png "Các file có thay đổi nội dung sẽ được liệt kê ra")

Nếu có thay đổi, chúng ta tiếp tục gõ:

> git add *

> git status

![Các file được thêm vào chuẩn bị gửi sẽ chuyển sang màu xanh lá](images/tao-blog-don-gian-voi-ktp-va-cmpharma/sau-git-add.png "Các file được thêm vào chuẩn bị gửi sẽ chuyển sang màu xanh lá")

Cuối cùng, dùng lệnh:
> git commit -m `"<nội-dung>"`

{{< admonition tip>}}
Nội dung thường là những thay đổi mới như "thêm bài viết ABC" hoặc là "cập nhật bài viết XZY"
{{< /admonition >}}

Lệnh cuối cùng đây:
> git push origin master

{{< admonition >}}
Khi dùng lệnh `push`, đôi khi chúng ta phải nhập `username` và `password` tài khoản `Github` - tài khoản tạo `repository`.
{{< /admonition >}}

Haizzz, cuối cùng cũng xong rồi, đợi báo `push` lên thành công thì chúng ta có thể vào `http://<username>.github.io` để xem blog của chính mình rồi.

{{< admonition tip>}}
Có thể vào địa chỉ `https://github.com/<username>/<username>.gitub.io` để kiểm tra file đã được gửi lên đầy đủ hay chưa.
{{< /admonition >}}

## 3 Kết luận
Chịu khó đọc hướng dẫn của tui hơi dài, nhưng các bạn thực hiện trong vòng một tiếng có thể hoàn thành rồi. Nếu các bạn quen rồi thì thời gian còn nhanh hơn. Các bạn có thể tạo blog cho riêng mình, cho bạn bè cũng được (nhưng chắc ít ai làm vậy lắm nhỉ :joy:).

Có thắc mắc hoặc khó khăn hay góp ý gì các bạn có thể comment dưới bài viết này, hoặc liên hệ trực tiếp với tui (info ở trang chủ nhé).

Cảm ơn các bạn đã chịu khó theo dõi đến đây. Hi vọng các bạn sẽ ủng hộ tui nữa nhé. Sự ủng hộ nhiệt tình và những đóng góp ý kiến chân thành từ các bạn sẽ giúp tui ngày càng hoàn thiện hơn để có nhiều bài viết hay và chất lượng.

Chúc các bạn thành công! :blush:

## 4 Tài liệu tham khảo
Các bạn có thể đọc thêm tài liệu về KTP theo link đây nhé (nguồn tui tham khảo đó).
1. [Thông tin và hướng dẫn dùng KTP - [KTP Team]](https://goKTP.io/documentation/)
2. [Hướng dẫn xây dựng blog cá nhân bằng KTP + Github - [Tu Bean]](https://tubean.github.io/2018/11/blog-with-KTP/)
