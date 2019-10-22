<template>
  <div class="resume">
    <div class="banner">
      <div class="banner__fullname">
        {{ formData.basics.name }}
      </div>
      <div class="banner__position">{{ formData.basics.jobTitle }}</div>
      <div v-if="formData.basics.date" class="banner__location">
        {{ formData.basics.date }}
      </div>
    </div>
    <div class="content">
      <div class="content__left">
        <div class="section">
          <div class="section-headline">
            About me
          </div>
          <div class="section-content section-content--plain">
            {{ formData.basics.summary }}
          </div>
        </div>
        <div class="section">
          <div class="section-headline">
            Languages
          </div>
          <div
            v-for="(language, index) in formData.languages"
            :key="index"
            class="section-content section-content--plain grid-item">
            {{ language.langTitle }}
            {{ language.level }}
          </div>
        </div>
        <div v-if="formData.skills" class="section">
          <div class="section-headline">
            Skills
          </div>
          <div class="section-content-grid">
            <a
              v-for="(skill, index) in formData.skills"
              class="grid-item"
              :key="index"
            >
              <span class="squarred-grid-item">
                {{ skill.skillTitle }}
              </span>
            </a>
          </div>
        </div>
        <div class="section">
          <div class="section-headline">
            Contacto
          </div>

          <div class="section-content section-content--plain">
            <div class="section-link">
              <i class="section-link__icon fas"></i>
              {{ formData.basics.location.city }}
              {{ formData.basics.location.address }}
            </div>

            <a class="section-link" :href="formData.basics.email">
              <i class="section-link__icon material-icons"></i>
              {{ formData.basics.email }}
            </a>

            <div class="section-link">
              <i class="section-link__icon material-icons"></i>
              {{ formData.basics.phone }}
            </div>

            <a
              v-if="formData.basics.website"
              class="section-link"
              :href="formData.basics.website"
            >
              <i class="section-link__icon fa fa-globe"></i>
              {{ formData.basics.website }}
            </a>

            <a
              v-for="(social, index) in formData.socials"
              class="section-link"
              :key="index"
              :href="social.link"
            >
              <i class="section-link__icon fa fa-linkedin"></i>
              {{ social.socialTitle }}
            </a>
          </div>
        </div>
      </div>
      <div class="content__right">
        <div class="section">
          <div class="section-headline">
            <i class="section-headline__icon fas fa-briefcase">work</i>
          </div>

          <div class="section-content">
            <a
              v-for="(work, index) in formData.works"
              :key="index"
              class="section-content__item"
            >
              <span class="section-content__header">
                {{ work.jobTitle }}
              </span>
              <span class="section-content__subheader">
                {{ work.employer }}
                <span class="section-content__plain"> ({{ work.city }}) </span>
              </span>

              <div class="section-content__text">
                {{ work.startDate }}
                {{ work.endDate }}
              </div>
              <span class="section-content__text--light">
                {{ work.desc }}
              </span>
            </a>
          </div>
        </div>
        <div class="section">
          <div class="section-headline">
            <i class="section-headline__icon fas fa-graduation-cap">School</i>
          </div>

          <div class="section-content">
            <a
              v-for="(education, index) in formData.educations"
              class="section-content__item"
              :key="index"
            >
              <span class="section-content__header">
                {{ education.educationTitle }}
                <span class="section-content__plain">
                  ({{ education.city }})
                </span>
              </span>
              <span class="section-content__subheader">
                {{ education.degree }}
              </span>
              <span class="section-content__text">
                {{ education.startDate }}
                {{ education.endDate }}
              </span>
              <span class="section-content__text--light">
                {{ education.desc }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cool",
  props: {
    formData: {}
  }
};
</script>

<style lang="scss" scoped>
$accent-color: #34495e;
$banner-color: #42b883;
$banner-height: 120px;
$picture-size: 120px;
$picture-offset: 35px;
$base-padding: 30px;
$left-column-width: 240px;

a {
  color: inherit;
  cursor: pointer;
  text-decoration-line: none;

  &:visited {
    color: inherit;
  }
}

.resume {
  position: relative;
  font-family: "Roboto" !important;
  font-size: 0.9em;
}

.picture {
  position: absolute;
  top: $banner-height - $picture-offset;
  left: $left-column-width + $base-padding * 2 - $picture-size / 2;
  height: $picture-size;
  width: $picture-size;
  border-radius: 50%;
  border: 5px solid $accent-color;
  z-index: 2;
}

.banner {
  width: calc(100% - $base-padding * 2);
  height: $banner-height;
  padding: $base-padding;
  background-color: $banner-color;
  /*
  background-image: url('../../resume/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  */
  color: white;

  &__fullname {
    font-size: 32px;
  }

  &__position {
    font-size: 16px;
  }

  &__location {
    font-size: 12px;
  }
}

.content {
  display: flex;
  width: 100%;
  height: 100%;

  &__left,
  &__right {
    height: 100%;
    padding: $base-padding;
  }

  &__left {
    width: $left-column-width;
    color: rgba(255, 255, 255, 0.59);
    background-color: $accent-color;

    .section-headline {
      color: white;
    }
  }

  &__right {
    flex: 1;
  }
}

.section {
  margin: 20px 0;
}

.section-link,
.section-headline {
  display: flex !important;
  align-items: center;
  color: $accent-color;
  display: inline-block;
  font-size: 1.2em;
  margin: 8px 0;

  &__icon {
    margin-right: 8px;
    font-size: 1.4em;
  }
}

.section-link {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.59) !important;

  &__icon {
    color: white;
  }
}

.section-content {
  margin-top: 5px;
  padding-left: 32px;
  font-size: 14px;

  &__item {
    display: block;
    margin-bottom: 5px;
  }

  &__header {
    display: block;
    font-size: 1.1em;
    font-weight: 500;
  }

  &__subheader {
    display: block;
    font-weight: 400;
  }

  &__plain,
  &__text {
    display: block;
    font-size: 12px;

    &--light {
      font-size: 12px;
    }
  }

  &__plain {
    display: inline;
    font-weight: 300;
  }

  &__item-grid {
    flex: 1 1 0;
    margin-bottom: 5px;
    padding-right: 5px;
  }

  &--plain {
    padding: 0;
  }
}

.section-content-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 5px;
}

.grid-item {
  padding-right: 5px;
}

.squarred-grid-item {
  display: block;
  border: 1px solid white;
  color: white;
  margin-top: 5px;
  padding: 5px;
}
</style>
