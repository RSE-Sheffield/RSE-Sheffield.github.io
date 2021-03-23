FROM ubuntu:20.04
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
RUN apt update && apt install -y build-essential git ruby-full
RUN gem install bundler jekyll
RUN git clone https://github.com/RSE-Sheffield/RSE-Sheffield.github.io.git
WORKDIR /RSE-Sheffield.github.io
RUN bundle config set path vendor/bundle
RUN bundle install
RUN bundle update --all
EXPOSE 4000
ENTRYPOINT bundle exec jekyll serve --host 0.0.0.0 --port 4000
